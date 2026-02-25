import Presentation from './components/Presentation';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import ExistingSystemSlide from './slides/ExistingSystemSlide';
import ProposedSystemSlide from './slides/ProposedSystemSlide';
import MethodologySlide from './slides/MethodologySlide';
import IOSlide from './slides/IOSlide';
import TechStackSlide from './slides/TechStackSlide';

export default function App() {
  return (
    <Presentation
      slides={[
        <CoverSlide />,
        <ProblemSlide />,
        <ExistingSystemSlide />,
        <ProposedSystemSlide />,
        <MethodologySlide />,
        <IOSlide />,
        <TechStackSlide />,
      ]}
    />
  );
}
