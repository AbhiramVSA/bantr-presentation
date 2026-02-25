import Presentation from './components/Presentation';
import CoverSlide from './slides/CoverSlide';
import AbstractSlide1 from './slides/AbstractSlide1';
import AbstractSlide2 from './slides/AbstractSlide2';
import DomainSlide from './slides/DomainSlide';
import MLConceptsSlide from './slides/MLConceptsSlide';
import DLConceptsSlide from './slides/DLConceptsSlide';
import NLPConceptsSlide from './slides/NLPConceptsSlide';
import RAGConceptsSlide from './slides/RAGConceptsSlide';
import SoftwareSlide from './slides/SoftwareSlide';
import HardwareSlide from './slides/HardwareSlide';
import ReferencesSlide from './slides/ReferencesSlide';

export default function App() {
  return (
    <Presentation
      slides={[
        <CoverSlide />,
        <AbstractSlide1 />,
        <AbstractSlide2 />,
        <DomainSlide />,
        <MLConceptsSlide />,
        <DLConceptsSlide />,
        <NLPConceptsSlide />,
        <RAGConceptsSlide />,
        <SoftwareSlide />,
        <HardwareSlide />,
        <ReferencesSlide />,
      ]}
    />
  );
}
