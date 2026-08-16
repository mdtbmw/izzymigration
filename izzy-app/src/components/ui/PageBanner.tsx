import React from "react";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  parent?: { label: string; href: string };
}

export function PageBanner({ title, subtitle, parent }: PageBannerProps) {
  return (
    <section
      className="breadcrumb__area breadcrumb__space overflow-hidden position-relative z-1"
      style={{
        backgroundImage: "url(/assets/imgs/breadcrumb/breadcrumb.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb__content text-center">
              <h1 className="breadcrumb__title mb-10">{title}</h1>
              <div className="breadcrumb__list">
                <span className="breadcrumb__item">
                  <Link href="/">Home</Link>
                </span>
                {parent && (
                  <>
                    <span className="breadcrumb__separator"> / </span>
                    <span className="breadcrumb__item">
                      <Link href={parent.href}>{parent.label}</Link>
                    </span>
                  </>
                )}
                <span className="breadcrumb__separator"> / </span>
                <span className="breadcrumb__item active">{subtitle || title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
