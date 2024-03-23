import Button from "@/components/common/button";
import Input, {inputVariant} from "@/components/common/input";
import PublicLayout from "@/layouts/public/public-layout";
import {useFormik} from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

export default function ContactPage() {
  const {handleSubmit, resetForm, errors, getFieldProps, touched} = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("فرمت وارد شده ضحیح نمی باشد")
        .required("وارد کردن آدرس ایمیل الزامی می باشد"),
      subject: Yup.string().required("وارد کردن موضوع الزامی می باشد"),
      message: Yup.string().required("وارد کردن توضیحات الزامی می باشد"),
    }),
    onSubmit: (values) => {
      console.log(values);
      toast.success("فرم شما با موفیت ثبت شد");
      resetForm();
    },
  });

  return (
    <PublicLayout>
      <section className="px-2 pb-10">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              تماس با ما
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              در صورتی که دوس داشتی با تیم ما در ارتباط باشی و یا مشکلی بود که
              نیاز بود با ما در میونش بزاری لطفا اینجا واسمون پیام بزار
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  آدرس ایمیل
                </label>
                <Input
                  variants="secondary"
                  {...getFieldProps("email")}
                  type="email"
                  id="email"
                  className="placeholder:text-left"
                  placeholder="coffe@gmail.com"
                />
                <div className="text-red-500 text-sm pt-2">
                  {touched.email && errors.email}
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  موضوع
                </label>
                <Input
                  variants="secondary"
                  {...getFieldProps("subject")}
                  type="text"
                  id="subject"
                  placeholder="موضوع پیامت رو وارد کن"
                />
                <div className="text-red-500 text-sm pt-2">
                  {touched.subject && errors.subject}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  توضیحات
                </label>
                <textarea
                  {...getFieldProps("message")}
                  id="message"
                  className={`${inputVariant({variants: "secondary"})} h-20`}
                  placeholder="هرچی دوس داری واسم بنویس"
                ></textarea>
                <div className="text-red-500 text-sm pt-2">
                  {touched.message && errors.message}
                </div>
              </div>
              <div className="pb-2 w-full">
                <Button
                  className="w-full items-center  justify-center"
                  loading={false}
                  type="submit"
                >
                  ارسال
                </Button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </PublicLayout>
  );
}
