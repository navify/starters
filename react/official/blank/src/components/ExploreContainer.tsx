import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Navify <a target="_blank" rel="noopener noreferrer" href="https://navifyframework.web.app/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
