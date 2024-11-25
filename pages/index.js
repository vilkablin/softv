
import Facilities from '../src/components/Facilities/Facilities';
import Features from '../src/components/Features/Features';
import Header from '../src/components/Header/Header';
import Intro from '../src/components/Intro/Intro';
import Programs from '../src/components/Programs/Programs';
import TargetConsumer from '../src/components/TargetConsumer/TargetConsumer';

const MainPage = () => {
  return(
    <>
    <Header/>
    <div className="main">
      <Intro/>
      <TargetConsumer/>
      <Programs/>
      <Features/>
      <Facilities/>
    </div>
    </>
  );
}
export default MainPage;