
import Contacts from '../src/components/Contacts/Contacts';
import Facilities from '../src/components/Facilities/Facilities';
import Features from '../src/components/Features/Features';
import Header from '../src/components/Header/Header';
import Intro from '../src/components/Intro/Intro';
import Programs from '../src/components/Programs/Programs';
import TargetConsumer from '../src/components/TargetConsumer/TargetConsumer';
import Versions from '../src/components/Versions/Versions';

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
      <Versions/>
      <Contacts/>
    </div>
    </>
  );
}
export default MainPage;