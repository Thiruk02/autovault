import './TopHeader.css';

function TopHeader() {
  return (
    <div className="top-header py-2 bg-primary text-light">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="contact-info">
          <i className="bi bi-telephone-fill me-2"></i>+1 800 123 4567
        </div>
        <div className="social-icons">
          <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
