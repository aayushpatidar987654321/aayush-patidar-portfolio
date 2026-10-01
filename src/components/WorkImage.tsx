interface Props {
  image: string;
  alt?: string;
  link?: string;
}

const WorkImage = ({ image, alt = "", link }: Props) => {
  return (
    <div className="work-image">
      <img
        src={image}
        alt={alt}
        loading="lazy"
      />

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="work-video-button"
        >
          <span>VIEW VIDEO</span>
          <span className="work-video-arrow">↗</span>
        </a>
      )}
    </div>
  );
};

export default WorkImage;