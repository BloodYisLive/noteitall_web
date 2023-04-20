import Image from "next/image";
import React, { useState } from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PrimaryTextFieldComponent from "../textfield-component/primary-text-field-component";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "../button-component";
const Footer = () => {
  const [userName, setUserName] = useState<string>("");
  return (
    <div className='rounded-[48px] border border-borderColor bg-cardBackground py-12 px-6 lg:px-32'>
      <div className='flex flex-col lg:grid lg:grid-cols-2 gap-10 mb-5'>
        <div className='mb-4'>
          <Image
            src={
              "https://genz-nextjs-v2.vercel.app/assets/imgs/template/logo.svg"
            }
            alt='logo'
            width={120}
            height={100}
          />
          <div className='my-5'>
            <span className='text-sm'>
              When an unknown prnoto sans took a galley and scrambled it to make
              specimen book not only five When an unknown prnoto sans took a
              galley and scrambled it to five centurie.
            </span>
          </div>
          <div className='flex flex-col'>
            <span className='text-textSecondary font-bold mb-1'>Address</span>
            <span className='text-sm'>
              123 Main Street
              <br />
              New York, NY 100001{" "}
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-textSecondary font-bold mb-1'>Newsletter</span>
          <span className='text-sm'>
            Sign up to be first to receive the latest stories inspiring us, case
            studies, and industry news.
          </span>
          <div className='mt-4'>
            <div className='mb-6'>
              <PrimaryTextFieldComponent
                placeholder='Your name'
                icon={<PersonRoundedIcon fontSize={"small"} />}
                onChangeText={setUserName}
              />
            </div>
            <div className='mb-6'>
              <PrimaryTextFieldComponent
                placeholder='Your email'
                icon={<EmailRoundedIcon fontSize={"small"} />}
                onChangeText={setUserName}
              />
            </div>
            <div className='my-5'>
              <Button
                title='Subscribe'
                onClick={() => console.log("I Pressed")}
                width={"100px"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center pt-12 border-t-[1px] border-[#222f43]'>
        <span className='mb-3'>© Created by Jash Palavwala</span>
        <div className='flex items-center justify-center flex-wrap '>
          <div className='group flex items-center justify-center mx-2 hover:-translate-y-1 transition-all cursor-pointer'>
            <TwitterIcon
              fontSize='small'
              className='group-hover:text-primary'
            />
            <span className='ml-1 group-hover:text-primary'>Twitter</span>
          </div>
          <div className='group flex items-center justify-center mx-2 hover:-translate-y-1 transition-all cursor-pointer'>
            <LinkedInIcon
              fontSize='small'
              className='group-hover:text-primary'
            />
            <span className='mx-1 group-hover:text-primary'>LinkedIn</span>
          </div>
          <div className='group flex items-center justify-center mx-2 hover:-translate-y-1 transition-all cursor-pointer'>
            <InstagramIcon
              fontSize='small'
              className='group-hover:text-primary'
            />
            <span className='mx-1 group-hover:text-primary'>Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
