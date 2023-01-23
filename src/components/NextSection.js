import {ReactComponent as ChevronDown} from './../img/chevron_down.svg';

export default function NextSection(props){

    //scroll to location
  const handleClick = (id) => () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
    return (
        <div className={`next-section ${props.className}`} onClick={handleClick(props.uniqueID)}>
                <ChevronDown/>
        </div>
    )
};