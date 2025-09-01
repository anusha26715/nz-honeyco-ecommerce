import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Hover from "../Hover/Hover";
import "./InfoPopover.css"; // optional for custom styles

const InfoPopover = ({ popoverInfo }) => {
  const popover = (
    <Popover id="umf-mgo-popover" className="custom-popover">
      <Popover.Body>
        {popoverInfo.map((each,id) => (
          <Hover key={id} info={each}/>
        ))}
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger={["hover", "focus"]} placement="bottom" overlay={popover}>
      <button className="btn btn-light border rounded-pill px-3 mb-3 info-btn">
        <i className="bi bi-info-circle pe-2"></i>
        What is UMF and MGO?
      </button>
    </OverlayTrigger>
  );
};

export default InfoPopover;
