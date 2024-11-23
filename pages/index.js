
import Header from '../src/components/Header/Header';
import Intro from '../src/components/Intro/Intro';
import TargetConsumer from '../src/components/TargetConsumer/TargetConsumer';

const MainPage = () => {
  return(
    <>
    <Header/>
    <div className="main">
      <Intro/>
      <TargetConsumer/>
    </div>
    </>
  );
}
export default MainPage;