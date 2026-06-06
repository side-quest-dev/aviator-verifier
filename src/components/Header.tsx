import React from "react";

const Header: React.FC = () => {
    return (
        <div className="header">
            <h1>
                <span className="header-emoji" aria-hidden="true">✈️</span>
                <span className="header-title">Aviator Round Verifier</span>
            </h1>
        </div>
    );
};

export default Header;