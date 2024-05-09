import ContentSection from "@/core/ui/components/content_section/ContentSection.component";
import Section from "@/core/ui/components/section/Section.component";
import React from "react";
import clsx from "clsx";
import { useForm, Controller } from "react-hook-form";

import { useHomeDictionaries } from "../../zustand/dictionaries/store";
import Textfield from "@/core/ui/components/textfield/Textfield.component";
import {
  ContactUsFormHome,
  EMAIL_CONTACT_US_FORM_HOME,
  FULLNAME_CONTACT_US_FORM_HOME,
  MESSAGE_CONTACT_US_FORM_HOME,
  PHONENUMBER_CONTACT_US_FORM_HOME,
  SUBJECT_CONTACT_US_FORM_HOME,
} from "../../constants/react_hook_form";
import TextArea from "@/core/ui/components/textarea/Textarea.component";
import { useForm as useFormFormSpree } from "@formspree/react";
import { getErrorsDictionaries } from "@/core/dictionaries/errors";
import ContactUsNotificationDialogHome from "../../components/contact_us_notification_dialog/ContactUsNotificationDialog.home";
import { useNavigationStore } from "@/core/zustand/navigation/store";
import { useIntersectionObserver } from "@/core/utils/hooks/useIntersectionObserver";

export interface ContactUsHomeProps {}

export default function ContactUsHome(_: ContactUsHomeProps) {
  const {
    watch,
    control,

    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm<ContactUsFormHome>();

  const FormSpreeKey = import.meta.env.VITE_PUBLIC_FORMSPREE_KEY ?? "";
  const [state, handleSubmit] = useFormFormSpree(FormSpreeKey);

  const dict = useHomeDictionaries().dict.contact_us;
  const errorDictionaries = getErrorsDictionaries("en");

  const navigationStore = useNavigationStore();
  const { isIntersecting, ref } = useIntersectionObserver({
    delay: 2000,
  });

  React.useEffect(() => {
    if (isIntersecting) {
      navigationStore.setInspectionIDNavigation("#contact-us");
    }
  }, [isIntersecting]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(FULLNAME_CONTACT_US_FORM_HOME, e.currentTarget.value);
    if (!e.currentTarget.value.length) {
      setError(FULLNAME_CONTACT_US_FORM_HOME, {
        type: "required",
        message: errorDictionaries.errors.required.message,
      });
    } else {
      clearErrors(FULLNAME_CONTACT_US_FORM_HOME);
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(EMAIL_CONTACT_US_FORM_HOME, e.currentTarget.value);
    if (!e.currentTarget.value.length) {
      setError(EMAIL_CONTACT_US_FORM_HOME, {
        type: "required",
        message: errorDictionaries.errors.required.message,
      });
    } else {
      clearErrors(EMAIL_CONTACT_US_FORM_HOME);
    }
  };

  const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(SUBJECT_CONTACT_US_FORM_HOME, e.currentTarget.value);
    if (!e.currentTarget.value.length) {
      setError(SUBJECT_CONTACT_US_FORM_HOME, {
        type: "required",
        message: errorDictionaries.errors.required.message,
      });
    } else {
      clearErrors(SUBJECT_CONTACT_US_FORM_HOME);
    }
  };

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(PHONENUMBER_CONTACT_US_FORM_HOME, e.currentTarget.value);
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(MESSAGE_CONTACT_US_FORM_HOME, e.currentTarget.value);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !watch(FULLNAME_CONTACT_US_FORM_HOME)?.length &&
      !watch(EMAIL_CONTACT_US_FORM_HOME)?.length &&
      !watch(SUBJECT_CONTACT_US_FORM_HOME)?.length &&
      !watch(MESSAGE_CONTACT_US_FORM_HOME)?.length
    ) {
      return;
    }

    // send email
    if (
      !!watch(FULLNAME_CONTACT_US_FORM_HOME)?.length &&
      !!watch(EMAIL_CONTACT_US_FORM_HOME)?.length &&
      !!watch(SUBJECT_CONTACT_US_FORM_HOME)?.length &&
      !!watch(MESSAGE_CONTACT_US_FORM_HOME)?.length
    ) {
      handleSubmit(e);
    }
  };

  return (
    <div ref={ref} id={"contact-us"} className={clsx("w-full")}>
      <Section>
        <ContentSection>
          <div
            className={clsx(
              "grid grid-cols-1 place-items-start place-content-start gap-y-[1.5rem]",
              "w-full",
              "py-[3rem] md:py-[6rem]"
            )}
          >
            {/* headline */}
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
            >
              <h4
                className={clsx(
                  "text-[1rem] leading-[1.5rem] md:text-[1.125rem] md:leading-[2rem] text-raisin-black font-light uppercase tracking-[0.3rem]",
                  "whitespace-nowrap"
                )}
              >
                {dict.pre}
              </h4>
              <h2
                className={clsx(
                  "text-[2.5rem] leading-[3.375rem] md:text-[3rem] md:leading-[4rem] text-eerie-black font-semibold"
                )}
              >
                {dict.headline}
              </h2>
            </div>

            <form
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start gap-y-[1.25rem]",
                "w-full"
              )}
              method={"POST"}
              onSubmit={handleSubmitForm}
            >
              <Controller
                control={control}
                name={FULLNAME_CONTACT_US_FORM_HOME}
                render={() => (
                  <div
                    className={clsx(
                      "grid grid-cols-1 place-content-start place-items-start w-full gap-y-[0.5rem]"
                    )}
                  >
                    <Textfield
                      required={true}
                      name={dict.form.full_name.label}
                      label={dict.form.full_name.label}
                      placeholder={dict.form.full_name.placeholder}
                      onChange={handleChangeName}
                    />

                    {!!errors[FULLNAME_CONTACT_US_FORM_HOME] && (
                      <p
                        className={clsx(
                          "text-flame text-[0.75rem] font-normal"
                        )}
                      >
                        {errors[FULLNAME_CONTACT_US_FORM_HOME].message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name={EMAIL_CONTACT_US_FORM_HOME}
                render={() => (
                  <div
                    className={clsx(
                      "grid grid-cols-1 place-content-start place-items-start w-full gap-y-[0.5rem]"
                    )}
                  >
                    <Textfield
                      required={true}
                      label={dict.form.email.label}
                      name={dict.form.email.label}
                      placeholder={dict.form.email.placeholder}
                      onChange={handleChangeEmail}
                    />
                    {!!errors[EMAIL_CONTACT_US_FORM_HOME] && (
                      <p
                        className={clsx(
                          "text-flame text-[0.75rem] font-normal"
                        )}
                      >
                        {errors[EMAIL_CONTACT_US_FORM_HOME].message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name={SUBJECT_CONTACT_US_FORM_HOME}
                render={() => (
                  <div
                    className={clsx(
                      "grid grid-cols-1 place-content-start place-items-start w-full gap-y-[0.5rem]"
                    )}
                  >
                    <Textfield
                      required={true}
                      label={dict.form.subject.label}
                      placeholder={dict.form.subject.placeholder}
                      name={dict.form.subject.label}
                      onChange={handleChangeSubject}
                    />
                    {!!errors[SUBJECT_CONTACT_US_FORM_HOME] && (
                      <p
                        className={clsx(
                          "text-flame text-[0.75rem] font-normal"
                        )}
                      >
                        {errors[SUBJECT_CONTACT_US_FORM_HOME].message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name={PHONENUMBER_CONTACT_US_FORM_HOME}
                render={() => (
                  <div
                    className={clsx(
                      "grid grid-cols-1 place-content-start place-items-start w-full gap-y-[0.5rem]"
                    )}
                  >
                    <Textfield
                      required={false}
                      label={dict.form.phone_number.label}
                      placeholder={dict.form.phone_number.placeholder}
                      name={dict.form.phone_number.label}
                      onChange={handleChangePhoneNumber}
                    />
                    {!!errors[PHONENUMBER_CONTACT_US_FORM_HOME] && (
                      <p
                        className={clsx(
                          "text-flame text-[0.75rem] font-normal"
                        )}
                      >
                        {errors[PHONENUMBER_CONTACT_US_FORM_HOME].message}
                      </p>
                    )}
                  </div>
                )}
              />

              <Controller
                control={control}
                name={MESSAGE_CONTACT_US_FORM_HOME}
                render={() => (
                  <div
                    className={clsx(
                      "grid grid-cols-1 place-content-start place-items-start w-full gap-y-[0.5rem]"
                    )}
                  >
                    <TextArea
                      required={true}
                      label={dict.form.message.label}
                      placeholder={dict.form.message.placeholder}
                      name={dict.form.message.label}
                      onChange={handleChangeMessage}
                    />
                    {!!errors[MESSAGE_CONTACT_US_FORM_HOME] && (
                      <p
                        className={clsx(
                          "text-flame text-[0.75rem] font-normal"
                        )}
                      >
                        {errors[MESSAGE_CONTACT_US_FORM_HOME].message}
                      </p>
                    )}
                  </div>
                )}
              />

              <button
                className={clsx(
                  "grid grid-cols-1 place-content-center place-items-center",
                  "bg-primary",
                  "rounded-[0.375rem]",
                  "w-full",
                  "py-[0.625rem] px-[1.25rem]",
                  "text-[1rem] leading-[2rem] font-semibold text-white uppercase"
                )}
                type={"submit"}
              >
                {dict.cta.primary}
              </button>
            </form>
          </div>
        </ContentSection>
      </Section>
      <ContactUsNotificationDialogHome
        open={state.succeeded}
        message={
          state.succeeded
            ? dict.notifications.upload_success.message
            : dict.notifications.upload_failed.message
        }
        description={
          state.succeeded
            ? dict.notifications.upload_success.description
            : dict.notifications.upload_failed.description
        }
        primaryCTALabel={
          state.succeeded
            ? dict.notifications.upload_success.cta.primary
            : dict.notifications.upload_failed.cta.primary
        }
        icon={
          state.succeeded
            ? dict.notifications.upload_success.icon
            : dict.notifications.upload_failed.icon
        }
      />
    </div>
  );
}
