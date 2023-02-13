import "../../styles/components/loading-spinner.scss";

const LoadingSpinner = () => {
    return (
        <div className="c-loading">
            <div className="c-loading__container">
                <div className="c-loading__spinner"></div>
            </div>
        </div>
    );
}

export default LoadingSpinner;