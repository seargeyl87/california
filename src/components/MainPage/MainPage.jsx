import ShowCase from "../ShowCase/ShowCase";
import Categories from "../Categories/Categories";
import MostSelledItems from "../MostSelledItems/MostSelledItems";
import BestAround from "../BestAround/BestAround";
import Ideas from "../Ideas/Ideas";
import LookingFor from "../LookingFor/LookingFor";
import EnterPhone from "../EnterPhone/EnterPhone";

function MainPage() {
  return (
    <>
      <ShowCase />
      <Categories />
      <MostSelledItems />
      <BestAround />
      <Ideas />
      <LookingFor />
      <EnterPhone />
    </>
  );
}

export default MainPage;
