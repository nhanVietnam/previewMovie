export const LoadingSkeleton = (props) => {
    return (
        <div
            className="skeleton"
            style={{
                height: props.height,
                width: props.width || "100%",
                borderRadius: props.radius,
                backgroundColor: "gray",
            }}></div>
    );
};
