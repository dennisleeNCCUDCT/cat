import React, { useEffect, useState } from "react";

const Cat = () => {
  //counter
  var catCounter = 0;
  var tigerCounter = 0;
  var cheetahCounter = 0;
  //usestates1
  const [cat, setCat] = useState();
  const [tiger, setTiger] = useState();
  const [cheetah, setCheetah] = useState();
  //usestate2
  //usestates1
  const [catText, setCatText] = useState();
  const [tigerText, setTigerText] = useState();
  const [cheetahText, setCheetahText] = useState();
  //usestate outter function
  function catHandler() {
    setCat(catCounter);
    catCounter += 1;
    console.log("cats:" + cat);
  }
  function tigerHandler() {
    setTiger(tigerCounter);
    tigerCounter += 1;
    console.log("tigers:" + tiger);
  }
  function cheetahHandler() {
    setCheetah(cheetahCounter);
    cheetahCounter += 1;
    console.log("cheetahs:" + cheetah);
  }
  //useEffects
  useEffect(() => {
    let timer = setTimeout(() => {
      setCatText(
        "親密的寵物： 貓是人類的親密寵物之一，與人類建立起深厚的情感聯繫。獨立的本性： 貓通常被認為是獨立、自主的動物，喜歡按照自己的步調行動。優雅的動作： 貓以其優雅的動作而聞名，包括靈活的身體、靈巧的跳躍和敏捷的奔跑。夜行性動物： 貓是夜行性動物，擁有優秀的夜視能力和敏銳的聽覺，使它們在夜晚狩獵時表現出色。獨特的叫聲： 貓有多種叫聲，包括咕嚕聲、喵喵聲和嘶嘶聲，它們用這些聲音與人類溝通。"
      );
      return () => clearTimeout(timer);
    }, 5000);
  }, [cat]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setTigerText(
        "壯觀的大貓： 老虎是世界上最大的貓科動物之一，牠們的壯碩體型和強壯肌肉令人印象深刻。 黃褐色的皮毛： 大多數老虎的皮毛呈現黃褐色橫紋，這種特殊的斑紋有助於他們在草原和森林中的隱蔽。 出色的獵手： 老虎是優秀的獵手，擁有強大的爪子和鋒利的牙齒，可以輕易捕捉和制服獵物。 獨自生活： 老虎通常是獨自生活的動物，它們喜歡獨自行動，每隻老虎會佔有一個自己的領域。 瀕危的物種： 老虎是一種瀕危的物種，牠們的棲息地受到破壞和非法盜獵的威脅，因此受到保護的重點關注。保育機構致力於保護這些令人敬畏的生物，以確保他們能在自然界中繼續生存。"
      );
      return () => clearTimeout(timer);
    }, 10000);
  }, [tiger]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCheetahText(
        "極速奔跑者： 獵豹是世界上奔跑速度最快的陸地動物，可以以時速達到每小時110至120公里的驚人速度奔跑。 細長的身軀： 獵豹有著纖細的身軀和長腿，這些特徵使其成為卓越的奔跑者，適應於在非常短的時間內追捕獵物。 黃色的斑紋： 獵豹身上佈滿了美麗的黃色斑紋，這些斑紋有助於它們在草原和灌木叢中進行隱蔽，成為出色的狩獵者。 獨自狩獵： 獵豹通常是獨自狩獵的動物，牠們憑藉敏銳的視力和迅速的速度，趁著日間在大草原上追捕獵物。 濒危物种： 獵豹是一種瀕危的物種，面臨著棲息地破壞、人類干擾和非法獵捕等威脅。由於這些威脅，獵豹的數量不斷下降，需要采取措施保護這些令人驚嘆的動物，以確保它們在野外持續存在。"
      );
      return () => clearTimeout(timer);
    }, 15000);
  }, [cheetah]);

  //
  return (
    <>
      <div className="cats mt-20">
        <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <button onClick={catHandler}>Cat</button>
        <p></p>
        <button onClick={tigerHandler}>Tiger</button> <p></p>
        <button onClick={cheetahHandler}>Cheetah</button>
      </div>
      <p>{catText}</p>
      <br />
      <br />
      <br />
      <p>{tigerText}</p>
      <br />
      <br />
      <br />
      <p>{cheetahText}</p>
    </>
  );
};

export default Cat;
