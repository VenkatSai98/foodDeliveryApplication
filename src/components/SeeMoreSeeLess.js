import React from "react";
import { useState } from "react";

const SeeMoreSeeLess = () => {
  const [showData, setShowData] = useState(false);
  const data =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit voluptate vitae facere esse earum voluptates neque modi eos dolorem nemo voluptatibus mollitia cumque voluptatem molestias saepe, assumenda optio laboriosam. Recusandae maxime eaque porro ea necessitatibus. Nesciunt adipisci corrupti reiciendis reprehenderit officia illo, praesentium sunt cum quas, architecto deserunt dolorem quae omnis sequi ipsum aperiam aliquam itaque dolores labore aut quo? Nobis perspiciatis reiciendis alias voluptates minima provident accusantium fuga impedit pariatur nisi, molestias nostrum fugit, voluptatibus assumenda quis libero quasi maxime ad inventore magnam ducimus commodi repellat consequuntur! Beatae minus non commodi nulla unde placeat neque exercitationem libero, dolor vero mollitia quas quia expedita? Ex in alias consectetur quis! Fugit amet, sunt corrupti architecto ullam exercitationem quam natus maiores libero facere quibusdam sapiente laboriosam, id, reiciendis quasi ad ipsa vitae corporis aliquam odit tenetur. Cupiditate nulla voluptates optio omnis repellendus tempora sunt debitis velit aspernatur cumque! Maxime, quaerat ex, sed distinctio cupiditate ut tempora voluptatem, cumque voluptate odio tenetur dolore vitae ratione saepe quibusdam veritatis beatae debitis provident facere sit accusamus consequatur modi. Facilis illo non, deleniti odit eaque ratione eligendi? Dicta doloribus velit deleniti, quia praesentium distinctio ut eos odio optio doloremque? Pariatur omnis consequuntur necessitatibus odit, quasi consequatur, doloremque animi possimus fuga rem optio repudiandae commodi illo ratione culpa unde sequi! Earum, eius labore accusamus sint rerum fugiat expedita nihil deleniti consectetur commodi officia. Eveniet odio sed nam beatae ducimus non consectetur dolore. Maiores sint doloremque quisquam doloribus earum accusantium, aspernatur rerum optio facere numquam. Facilis eum suscipit debitis ab, nisi tempore, ex cumque minima quaerat illo perspiciatis consequuntur officia? In ab nostrum maiores corrupti quia consectetur non doloribus quae eos obcaecati facere nulla placeat, reiciendis blanditiis repellat laudantium magnam soluta voluptatum sapiente. Incidunt obcaecati, impedit nostrum consequatur sunt nam et nihil ex? Rem reprehenderit, similique harum cum architecto optio laudantium, error qui modi sequi molestiae quis illo atque. Sint ut sequi quis quod alias, et molestias ex illum deleniti in ducimus, vel culpa, neque itaque recusandae. Hic neque vero ipsum. Fugiat voluptatem, labore sint veniam nam eligendi? In totam tempore, distinctio sunt veniam quis sequi sed natus et, magnam reiciendis maxime odio quam sint quos facere numquam error blanditiis nesciunt, deserunt expedita ratione dicta dolores sapiente! Cumque corrupti veniam voluptatum ad unde aspernatur ipsam perspiciatis dolores. Ipsa perferendis reiciendis enim tempore quibusdam commodi aperiam itaque voluptate debitis velit ad pariatur, quisquam deserunt! Veritatis eligendi, recusandae laboriosam minus beatae natus. Odit veritatis neque officia cumque quas unde inventore explicabo, soluta doloremque fugiat quidem possimus, provident dignissimos esse repudiandae earum aliquid velit animi necessitatibus qui consectetur? Odio quia saepe blanditiis culpa dicta, nulla reprehenderit ipsa voluptatem laborum perspiciatis doloremque maiores quisquam cum quas, sit fugit cupiditate. Nulla, amet sunt veritatis, architecto iusto expedita iste voluptatem beatae qui quis odio adipisci ut debitis eveniet ipsum id totam laboriosam. Ex enim, cupiditate soluta iusto saepe perspiciatis mollitia sapiente debitis ?";
  return (
    <div>
      <h1 className="font-semibold">{showData ? data : `${data.substring(0, 250)}`}</h1>
      <button
        className="border border-gray-500 font-normal px-3 py-2 rounded-xl"
        onClick={() => setShowData(!showData)}
      >
        {showData ? "see less" : "see more"}
      </button>
    </div>
  );
};

export default SeeMoreSeeLess;
