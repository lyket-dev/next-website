import { StructuredText, Image } from "react-datocms";

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

import parse from "html-react-parser";
import RegisterButton from "./RegisterButton";
export default function LandingBody({ content }) {
  return (
    <section className="page__section" id="main-content">
      <div className="page-layout">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "TextImageRecord":
                return (
                  <div
                    className={`block--${random(["pink", "green", "yellow"])}`}
                    key={record.id}
                  >
                    <div className="block__text__container">
                      <h3 className="block__title">{record.title}</h3>
                      <div className="block__text">{parse(record.text)}</div>
                    </div>
                    {record.image && (
                      <Image
                        key={record.image.id}
                        data={record.image.responsiveImage}
                        className="block__image"
                      />
                    )}
                  </div>
                );
              case "ImageRecord":
                return (
                  <div key={record.id}>
                    {record.image && (
                      <Image
                        key={record.image.id}
                        data={record.image.responsiveImage}
                        className="content__image"
                      />
                    )}
                  </div>
                );
              default:
                return <div />;
            }
          }}
        />
        <section className="section">
          <RegisterButton />
        </section>
      </div>
    </section>
  );
}
