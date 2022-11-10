import ShowCase from '../ShowCase/ShowCase';
import Categories from '../Categories/Categories';
import MostSelledItems from '../MostSelledItems/MostSelledItems';
import BestAround from '../BestAround/BestAround';
import Ideas from '../Ideas/Ideas';
import LookingFor from '../LookingFor/LookingFor';
import EnterEmail from '../EnterEmail/EnterEmail';
 



function  MainPage() {
    return (
        <>
        <ShowCase/>
        <Categories/>
        <MostSelledItems/>
        <BestAround/>
        <Ideas/>
        <LookingFor/>
        <EnterEmail/>
        </>
    )
    
}

export default MainPage;