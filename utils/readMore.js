export default function ReadMore({ children, maxCharacterCount = 100}) {
    const text = children;

    const [isTruncated, setIsTruncated] = useState(true);

    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

    function toggleIsTruncated() {
        setIsTruncated(!isTruncated)
    }

    return (
        <div className="description">
            <p>
                {resultString}
            </p>
            <span onClick={() => toggleIsTruncated()}>
                {isTruncated ? "Read More" : "Read Less"}
            </span>
            <style jsx>
                {`
                    p {
                        color: #88939E
                    }
                    span {
                        cursor: pointer;
                        color: #EE2D1C;
                    }
                `}
            </style>
        </div>
    )
}