import React from 'react';
import ReactDOM from 'react-dom/client';
import '@testing-library/jest-dom';
import { cleanup, render, act, fireEvent } from '@testing-library/react';
import IdleSessionTimer from '../index';

const router = {
  push: jest.fn((val : string) => {}),
}

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: router?.push,
    };
  },
}));

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');



describe('Testing Idle Session Timer Component', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document?.createElement('div');
    document?.body?.appendChild(container);
  });
  afterEach(() => {
    document?.body?.removeChild(container);
    container = null;
    jest.clearAllMocks();
    jest.clearAllTimers();
  });
  it('rendering component when there is no user data', () => {
    const props = {
      useUser: () => {
        return {
          userData: null,
          updateUserData: () => {},
        };
      },
      apiUtil: {
        makeApigeeCall: async () => {
          return Promise?.resolve();
        },
        makeApiCall: async () => {
          return Promise?.resolve({
            data: {
              data: {
                timeout: {
                  modalBodyData: '',
                  toastMessage: '',
                  modalTitle: '',
                  modalOKButton: '',
                },
              },
            },
          });
        },
      },
      useCookie: (x, y) => {
        return [x, y, () => {}];
      },
      i18ConfigList: undefined,
    };
    act(() => {
      ReactDOM?.createRoot(container)?.render(<IdleSessionTimer {...props} />);
    });
    expect(container.childElementCount).toBe(0);
  });
  it('rendering component with user data', () => {
    const props = {
      useUser: () => {
        return {
          userData: {
            email: 'xyz@mail.com',
          },
          updateUserData: () => {},
        };
      },
      apiUtil: {
        makeApigeeCall: async () => {
          return Promise?.resolve();
        },
        makeApiCall: async () => {
          return Promise?.resolve({
            data: {
              data: {
                timeout: {
                  modalBodyData:
                    'For your info, you will be logged out due to inactivity',
                  toastMessage:
                    'you are automatically logged out due to inactivity',
                  modalTitle: 'Security Warning',
                  modalOKButton: 'OK',
                },
              },
            },
          });
        },
      },
      useCookie: (x, y) => {
        return [x, y, () => {}];
      },
      i18ConfigList: {
        automaticallyLoggedOutNotice:
          'you are automatically logged out due to inactivity',
        securityWarningTitle: 'Security Warning',
        securityWarningNotice:
          'For your info, you will be logged out due to inactivity',
        okButton: 'ok',
      },
    };
    act(() => {
      ReactDOM?.createRoot(container)?.render(<IdleSessionTimer {...props} />);
    });
    expect(container.childElementCount).toBe(1);
    act(() => {
      jest.runAllTimers();
    });
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(container.childElementCount).toBe(2);
    const btn: HTMLButtonElement | null | undefined = document?.querySelector(
      '.flex.flex-row.items-center.pt-8.px-8.pb-10 button',
    );
    expect(btn).toBeDefined();
    const closeIcon: HTMLSpanElement | null | undefined =
      document?.querySelector('button .icon-x');
    const parentOfCloseIcon: HTMLButtonElement | HTMLElement =
      closeIcon?.parentElement;
    expect(closeIcon).toBeDefined();
    expect(parentOfCloseIcon).toBeDefined();
    act(() => {
      btn?.click();
      parentOfCloseIcon?.click();
    });
  });
  it('rendering dologout function', async () => {
    const props = {
      useUser: () => {
        return {
          userData: {
            email: 'xyz@mail.com',
          },
          updateUserData: () => {},
        };
      },
      apiUtil: {
        makeApigeeCall: async () => {
          return Promise?.resolve();
        },
        makeApiCall: async () => {
          return Promise?.resolve({
            data: {
              data: {
                timeout: {
                  modalBodyData:
                    'For your info, you will be logged out due to inactivity',
                  toastMessage:
                    'you are automatically logged out due to inactivity',
                  modalTitle: 'Security Warning',
                  modalOKButton: 'OK',
                },
              },
            },
          });
        },
      },
      useCookie: (x, y) => {
        return [x, y, () => {}];
      },
      i18ConfigList: {
        automaticallyLoggedOutNotice:
          'you are automatically logged out due to inactivity',
        securityWarningTitle: 'Security Warning',
        securityWarningNotice:
          'For your info, you will be logged out due to inactivity',
        okButton: 'ok',
      },
    };
    let wrapper, getById;
    await act(() => {
      const { container, getByTestId } = render(<IdleSessionTimer {...props} />);
      wrapper = container;
      getById = getByTestId; 
    });
    expect(wrapper.querySelector('div')).toBeInTheDocument();
    await act(() => {
      jest.advanceTimersByTime(20 * 60 * 1000);
    });
    expect(getById('closeModal')).toBeInTheDocument();
    await act(() => {
      jest.advanceTimersByTime(5 * 60 * 1000);
    });
    expect(router?.push).toBeCalled();
    expect(window?.sessionStorage?.getItem('LOG_OUT_TOAST')).toBe('true');
    expect(getById('info-icon')).toBeInTheDocument();
    await act(() => {
      fireEvent?.click(getById('info-close-icon'));
    });
    expect(window?.sessionStorage?.getItem('LOG_OUT_TOAST')).toBe(null);
  });
});