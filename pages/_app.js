import '../src/assets/styles/App.css';
import '../src/components/Header/header.css';
import '../src/components/Intro/intro.css';
import '../src/components/TargetConsumer/target.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;