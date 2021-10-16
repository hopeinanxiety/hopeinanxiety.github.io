import './InspirationLink.css';

interface ContainerProps { }

const InspirationLink: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>InspirationLink</strong>
      <p>Remember Promises <a rel="noopener noreferrer" href="/hope">Hope for the future</a></p>
    </div>
  );
};

export default InspirationLink;
