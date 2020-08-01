import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import deadCorpse from '../../assets/img/deadcorpse.png';
import './Error404.css';
import Button from '../../components/Button';

function Error404() {
  return (
    <PageDefault>

      <div className="httpErrorDiv">
        Page not found
        <Link to="/">
          <img className="httpErrorImg" src={deadCorpse} alt="Error found" />
        </Link>
        <div className="httpErrorMessage">
          Alas! Brave adventurer, you have met a sad fate.
          <br />
          But do not despair, for the gods will bring you back
          <br />
          into the world in exchange for a small sacrifice.
          <br />
          <br />
          Simply click on &apos;Ok&apos; to resume your journeys in Tibia!
          <br />
        </div>
        <div className="httpErrorButton">
          <Button as={Link} to="/">
            Ok
          </Button>
        </div>
      </div>
    </PageDefault>
  );
}

export default Error404;
