import { ProgressBar } from 'react-loader-spinner';

export default function Loader() {
  return (
    // <ContainerLoader>
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#3f51b5"
      barColor="#51E5FF"
    />
    // </ContainerLoader>
  );
}
