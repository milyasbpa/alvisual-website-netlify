import clsx from "clsx";
import FooterCompany, {
  FooterCompanyProps,
} from "../footer_company/FooterCompany.component";
import FooterLink, {
  FooterLinkProps,
} from "../footer_link/FooterLink.component";
import FooterContact, {
  FooterContactProps,
} from "../footer_contact/FooterContact.component";
import ContentSection from "../content_section/ContentSection.component";
import FooterCredits from "../footer_credits/FooterCredits.component";

export interface FooterProps {
  company?: FooterCompanyProps;
  link?: FooterLinkProps;
  contact?: FooterContactProps;
  credits?: string;
}

export default function Footer({
  company = {
    image: "",
    imageAlt: "",
    description: "",
  },
  link = {
    title: "",
    activeTargetID: "",
    list: [],
  },
  contact = {
    title: "",
    list: [],
  },
  credits = "",
}: FooterProps) {
  return (
    <footer
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-center justify-items-center",
        "w-full",
        "bg-eerie-black",
        "px-[1rem] md:px-[1.5rem]"
      )}
    >
      <ContentSection>
        <div
          className={clsx(
            "grid grid-cols-1 lg:grid-cols-3 items-start content-start justify-center justify-items-center w-full gap-[1.25rem]",
            "py-[1rem] md:py-[5rem]"
          )}
        >
          <FooterCompany
            image={company.image}
            imageAlt={company.imageAlt}
            description={company.description}
          />
          <FooterLink
            title={link.title}
            activeTargetID={link.activeTargetID}
            list={link.list}
            onClick={link.onClick}
          />
          <FooterContact title={contact.title} list={contact.list} />
        </div>

        <FooterCredits credits={credits} />
      </ContentSection>
    </footer>
  );
}
