import React from 'react'
import './Info.css'

const Info = () => {
  return (
    <>
      <div className="my-3">
        <p>PAYMENT OPTIONS (SELECT ONE)</p>
        <div className="btn-container">
            <div className="btn-group">
              <button type="button" className="btn btn-warning rounded-pill w-50 purchase">
                <span>One-time purchase</span> 
                <span>$55.88 USD</span>
              </button>
              <button type="button" className="btn btn-outline-warning rounded-pill w-50 subscribe">
                <span>Subscribe & save 20%</span> 
                <span>$44.70 USD</span>
              </button>
            </div>
            <p className='mb-0 pt-1 question-text'>
                <i className="bi bi-arrow-clockwise"></i>&nbsp;
                What is a Subscription?
            </p>
            </div>
          </div>

          <div className="d-flex flex-column mb-3">
            <p>SELECT QUANTITY</p>
            <div className='btn-group w-100'>
                <button className="btn btn-warning w-50 rounded-pill">
                    <span>-</span><span className='ps-4 pe-4'>1</span><span>+</span>
                </button>
                <button className="btn btn-dark ms-3 w-75 rounded-pill">Add to Cart</button>
            </div>
          </div>
          <div className="bundle-container">
            <p className='text-center'>
                <i className="bi bi-chevron-left"></i>&nbsp;
                Beauty Bundle&nbsp;
                <i className="bi bi-chevron-right"></i>
            </p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7"
                    >
                       <div className="row">
                        <div className="col-4 bundle-img-text">
                            <img src="/model-img-1.png" className='img-fluid' alt="Manuka Honey"/>
                            <strong className='d-inline-block pt-1 pb-1'>UMF 20+</strong>
                            <button type="button" className='btn btn-outline-secondary rounded-pill'>250g <i className="bi bi-caret-down-fill"></i></button>
                            <span className='plus'>+</span>
                        </div>
                        <div className="col-4 bundle-img-text">
                            <img src="/model-img-2.png" className='img-fluid' alt="Manuka Honey" />
                            <strong className='d-inline-block pt-1 pb-1'>UMF 20+</strong>
                            <button type="button" className='btn btn-outline-secondary rounded-pill'>250g <i className="bi bi-caret-down-fill"></i></button>
                            <span className='plus'>+</span>
                        </div>
                        <div className="col-4 bundle-img-text">
                            <img src="/utensil-img.png" className='img-fluid' alt="Manuka Honey" />
                            <strong className='d-inline-block pt-1 pb-1'>Wooden Spoon</strong>
                        </div>
                       </div>
                    </div>
                    <div className="col-5 d-flex flex-column justify-content-center align-items-center">
                       <p className='bundle-price'><span>$478.75 USD</span>&nbsp;<span>$430.88 USD</span>&nbsp;<span>save 10%</span></p>
                       <div className='w-100'>
                         <button className="btn btn-dark rounded-pill bundle-cart-btn">ADD BUNDLE TO CART</button>
                       </div>
                    </div>
                </div>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-3 pt-3'>
            <img src="/colourclub-logo.png" alt="Colour Club" />
            <p className='small reward-text'>
                Colourclub members earn upto <strong>56</strong> reward points when buy this item. Signup or login.
            </p>
          </div>

            <div className="row delivery pt-4">
                <div className="col-6">
                    <p>DELIVERY</p>
                    <p>FREE DELIVERY ON ORDERS OVER $30</p>
                </div>
                <div className="col-6">
                    <p>ESTIMATED DELIVERY DATE</p>
                    <p>Jun 9 - Jun 13</p>
                </div>
            </div>
            <hr />
            <div className='pay-text'>
                <p className='mb-0'>AFTER PAY</p>
                <p>or 4 interest-free payments of $13.97 with 💲<strong style={{color:"var(--color-purple)"}}>Afterpay </strong><i className="bi bi-info-circle"></i></p>
            </div>
            <hr />

          <div className="umf-scale-container">
        <h6>UMF™ SCALE</h6>
        <div className="umf-scale">
            <span style={{ "--clr": "var(--color-orange)" }}>UMF™ 10+</span>
            <span style={{ "--clr": "var(--color-red)" }}>UMF™ 15+</span>
            <span style={{ "--clr": "var(--color-pink)" }}>UMF™ 20+</span>
            <span className="active" style={{ "--clr": "var(--color-purple)" }}>
            UMF™ 24+
            </span>
            <span style={{ "--clr": "var(--color-blue)" }}>UMF™ 26+</span>
            <span style={{ "--clr": "var(--color-green)" }}>UMF™ 28+</span>
            <span style={{ "--clr": "var(--color-navy)" }}>UMF™ 30+</span>
        </div>

        <h6 className="mt-4">TASTE PROFILE</h6>
        <div className="taste-profile mb-5">
            <span>Clean &amp; Intense</span>
            <div className="line">
                <div className="dot"></div>
            </div>
            <span>Bold &amp; Intense</span>
        </div>
     </div>
    </>
  )
}

export default Info
