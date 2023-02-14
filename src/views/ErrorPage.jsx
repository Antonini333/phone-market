import React from "react";
const ErrorPage = () => {

    return (
        <div className="c-error-page" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "95vh" }}>
            <div className="c-error-page__message">
                <h2>Oops! No se ha encontrado el artículo</h2>
            </div>
        </div>
    )
}

export default ErrorPage