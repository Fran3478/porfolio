const TechItems = ({ title, img, alt }) => {
    return (
        <div className="flex flex-col justify-items-center text-center">
            <img src={img} alt={alt} className="w-20 h-20 m-auto" />
            <p className="font-semibold">{title}</p>
        </div>
    )
}

export default TechItems