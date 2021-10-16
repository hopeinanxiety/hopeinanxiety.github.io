import './InformationLink.css';

interface ContainerProps { }

const InformationLink: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>InformationLink</strong>
      <p>Get Informed <a rel="noopener noreferrer" href="/know">Know what you're up against</a></p>
    </div>
  );
};

export default InformationLink;
