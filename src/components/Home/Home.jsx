import ProductCarousel from "../ProductCarousal/ProductCarousal";
import Info from "../Info/Info";
import InfoPopover from "../InfoPopover/InfoPopover";
import "./Home.css";

const images = [
  "/product-img.png",
  "/model-show.png",
  "/modal-opener.png",
  "/model-use.png",
  "/model-potrait.png",
  "/model-potrait2.png",
  "/honey-img.png",
];

const popoverInfo = [
  {
    term: "UMF",
    title:"is the strength and purity of Manuka honey.",
    description:"The higher the number, the greater the potency and rarity of Manuka honey.",
    potencyLevels: [10,15,20,24,26,28,30]
  },
  {
    term: "MGO",
    title:"is the key natural compound that gives Manuka honey its special anibacterial strength.",
    description:"The higher the number, the higher the antibacterial properties in the honey.",
    potencyLevels: [263,514,829,1122,1282,1450,1620]
  }
]

const Home = () => {

  return (
    <main className="container home-container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <ProductCarousel images={images} />
          <div className="grid-container mt-4">
            <div className="row g-1">
              <div className="col-6">
                <div className="grid-item">
                  <img
                    src="modal-opener.png"
                    alt="grid-image-1"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="grid-item">
                  <img
                    src={images[1]}
                    alt="grid-image-2"
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="grid-item grid-item-full">
                  <img
                    src="gallery-img.png"
                    alt="grid-image-3"
                    className="img-fluid rounded shadow-sm"
                    style={{ objectFit: "fill" }}
                  />
                </div>
              </div>

              {images.slice(3).map((image, index) => (
                <div key={index} className="col-6">
                  <div className="grid-item">
                    <img
                      src={image}
                      alt={`grid-image-${index + 4}`}
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 mt-lg-5">
          <h3>Manuka Honey</h3>
          <p className="mb-2 fs-5">
            UMF™<strong className="fs-2"> 24+</strong> <br />
            MGO<strong className="fs-2"> 1122+</strong>
          </p>

          <InfoPopover popoverInfo={popoverInfo} />
          <div className="d-flex justify-content-between align-items-center gap-2 my-2">
            <span>The Optimizer</span>
            <div className="d-flex align-items-center gap-2">
              <div className="d-flex text-warning gap-1">
                <i className="bi bi-heart-fill"></i>
                <i className="bi bi-heart-fill"></i>
                <i className="bi bi-heart-fill"></i>
                <i className="bi bi-heart-fill"></i>
                <i className="bi bi-heart-fill"></i>
              </div>
              <span>825 Reviews</span>
            </div>
          </div>
          <p>
            For those times in life when quality comes first. This pure UMF™ 24+ Manuka
            Honey is powerfully active, sourced from wild and rugged locations around
            Aotearoa New Zealand and great for almost all uses. It has a full, delicious
            flavour and your body will love you for it.
          </p>
          <div className="certificate-container">
            <img src="/certification-1.png" alt="UMF" title="UMF" />
            <img src="/certification-2.png" alt="NON GMO" title="NON GMO"/>
            <img src="/certification-3.png" alt="GLYPHOSATE FREE" title="GLYPHOSATE FREE" />
            <img src="/certification-4.png" alt="FIANZ"  title="FIANZ"/>
            <img src="/certification-5.png" alt="NEWZEALAND.COM" title="NEWZEALAND.COM" />
            <img src="/certification-6.png" alt="MGO" title="MGO" />
          </div>
          <div>
            <p className="mb-0">SIZE (SELECT ONE)</p>
            <p>Varient 125g | 4.4oz</p>
            <div className="img-container">
              <img src="/Label-paints-7.png" alt="Honeyco." />
              <img src="/Label-paints-6.png" alt="Honeyco." />
              <img src="/Label-paints-5.png" alt="Honeyco." />
              <img src="/Label-paints-4.png" alt="Honeyco." />
              <img src="/Label-paints-3.png" alt="Honeyco." />
              <img src="/Label-paints-2.png" alt="Honeyco." />
              <img src="/Label-paints-1.png" alt="Honeyco." />
            </div>
          </div>

          <Info />
        </div>
      </div>
    </main>
  );
};

export default Home;
