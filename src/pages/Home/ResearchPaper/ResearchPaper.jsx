import ResearchPaperCard from "../../../components/Shared/ResearchPaperCard/ResearchPaperCard";
import SectionTitle from "../../../components/Shared/SectonTitle/SectionTitle";
import ResearchImg1 from "../../../assets/research1.jpeg";
import ResearchImg2 from "../../../assets/research2.jpeg";
import ResearchImg3 from "../../../assets/research3.jpeg";

const ResearchPaper = () => {
  return (
    <div className="fitting space-top-bottom">
      <SectionTitle
        heading="Groundbreaking Student "
        headingEnd="Research"
        subHeading="Explore innovative research projects that are shaping the future brought to you by the brightest minds in academia"
      />
      <div className="grid grid-cols-3 gap-5">
        <ResearchPaperCard
          image={ResearchImg1}
          name="Quantum Computing: The Next Frontier in Computational Power"
          institute="Riverside University"
          description="Authored by researchers at Riverside University, this paper explores the future of quantum computing and its ability to solve complex problems beyond the capabilities of classical computers. It explains the fundamental principles of quantum mechanics that make this technology possible and discusses its potential impact on industries like cybersecurity, pharmaceutical research, and financial analysis. The study also covers the ongoing challenges in quantum algorithm development and hardware stability"
        />
        <ResearchPaperCard
          image={ResearchImg2}
          name="Quantum Computing: The Next Frontier in Computational Power"
          institute="Riverside University"
          description="Authored by researchers at Riverside University, this paper explores the future of quantum computing and its ability to solve complex problems beyond the capabilities of classical computers. It explains the fundamental principles of quantum mechanics that make this technology possible and discusses its potential impact on industries like cybersecurity, pharmaceutical research, and financial analysis. The study also covers the ongoing challenges in quantum algorithm development and hardware stability"
        />
        <ResearchPaperCard
          image={ResearchImg3}
          name="Quantum Computing: The Next Frontier in Computational Power"
          institute="Riverside University"
          description="Authored by researchers at Riverside University, this paper explores the future of quantum computing and its ability to solve complex problems beyond the capabilities of classical computers. It explains the fundamental principles of quantum mechanics that make this technology possible and discusses its potential impact on industries like cybersecurity, pharmaceutical research, and financial analysis. The study also covers the ongoing challenges in quantum algorithm development and hardware stability"
        />
      </div>
    </div>
  );
};

export default ResearchPaper;
