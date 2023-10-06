import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.css';
import download from './images/downloadebook.png';
import logo from './images/logo.png';

function Main() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleDownloadClick = e => {
    e.preventDefault();

    setTimeout(() => {
      setName('');
      setEmail('');
      toast.success('Download is complete!', {
        position: 'top-right',
        autoClose: 3000,
      });
    }, 3000);
  };

  return (
    <div className="main mob">
      <div className="container-header">
        <img className="logo" src={logo} alt="logo" />
        <p className="header mob">Engaj Media</p>
      </div>
      <ToastContainer />
      <div className="container mob ">
        <div className="container-sections mob tablet">
          <div className="section-one mob">
            <h1 className="title mob">
              Unlock Your Marketing Potential with Our eBook{' '}
              <span className="ebook-name mob">
                Marketing Automation and ROI: A Comprehensive Guide
              </span>
            </h1>
            <p className="paragraph mob">
              Provide a detailed guide on marketing automation tools,
              implementation, and how they can drive a better return on
              investment.
            </p>
            <div>
              <img
                className="image-action mob"
                src={download}
                alt="download-action"
              />
            </div>

            <div className="container-icons mob"></div>
          </div>

          <div className="section-two mob">
            <div className="rectangle-form mob tablet">
              <div className="container-form mob tablet">
                <h1 className="title-form mob tablet">
                  Learn how to boost ROI through marketing automation tools and
                  strategies
                </h1>
                <form onSubmit={handleDownloadClick}>
                  <input
                    className="input mob"
                    type="text"
                    name="name"
                    pattern="^\D{2,}\s[\D\s]{2,}$"
                    placeholder="Please enter your name*"
                    value={name}
                    onChange={e => setName(e.currentTarget.value)}
                    required
                  />

                  <input
                    className="input mob"
                    type="email"
                    name="email"
                    placeholder="Please enter your email*"
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                    required
                  />

                  <div className="download-button mob tablet">
                    <button type="submit" className="download-link mob tablet">
                      Download eBook
                    </button>
                  </div>
                  <p className="paragraph-footer mob">
                    We respect your <span className="privacy">privacy</span>.
                    Your information is safe.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
