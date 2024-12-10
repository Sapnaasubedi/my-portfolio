import React from "react";
import { Layout, Carousel, Image } from "antd";

const { Sider } = Layout;

interface ImageItem {
  id: number;
  src: string;
  alt: string;
  url: string;
}

interface ImageSiderProps {
  images: ImageItem[];
}

const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const ImageSider: React.FC<ImageSiderProps> = ({ images }) => {
  return (
    <Sider
    width={600}
      style={{
        background: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "auto",
        borderRadius: "10px",
        padding: "10px",
        position: "relative",
        width: "100%",
      }}
    >
      <Carousel autoplay dotPosition="bottom">
        {images.map((image) => (
          <div
            key={image.id}
            style={{
              position: "relative",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              preview={false}
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "auto",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => openInNewTab(image.url)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 12px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.2)";
              }}
            />
          </div>
        ))}
      </Carousel>

      <style jsx>{`
        @media (max-width: 768px) {
          .ant-layout-sider {
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .ant-layout-sider {
            width: 100%;
          }
        }
      `}</style>
    </Sider>
  );
};

export default ImageSider;
