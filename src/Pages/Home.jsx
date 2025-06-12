import React, { Component } from 'react'
import TelegramIcon from '../assets/telegram-brands.svg';
import InstaIcon from '../assets/instagram-brands.svg';
import EmailIcon from '../assets/envelope-solid.svg';
import FacebookIcon from '../assets/facebook-brands.svg';
import TwitterIcon from '../assets/twitter-brands.svg';
import UserIcon from '../assets/user-tie-solid.svg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='container font-lato'>
          <div className='w-[730px]'>
            <div></div>
            <div className='font-bold'>
              <h1 className='text-[40px]'>About Edu Center</h1>
              <p className='text-[23px] my-[20px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quibusdam a perspiciatis necessitatibus officiis mollitia reiciendis debitis doloremque dolorum. Perferendis sequi aliquam harum provident nisi modi maiores assumenda corporis aut corrupti voluptates ipsa cumque, aspernatur voluptatem iure ipsum consequatur iste?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, quibusdam a perspiciatis necessitatibus officiis mollitia reiciendis debitis doloremque dolorum. Perferendis sequi aliquam harum provident nisi modi maiores assumenda corporis aut corrupti voluptates ipsa cumque, aspernatur voluptatem iure ipsum consequatur iste?</p>
              <div className='flex items-center gap-[40px] my-[40px]'>
                <a className='bg-[#6397D2] text-[#fff] text-[21px] px-[45px] py-[18px] rounded-lg' href="#">Join for free</a>
                <div className='flex gap-[23px]'>
                  <a href="#"><img className='w-[50px]' src={TelegramIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={FacebookIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={InstaIcon} alt="" /></a>
                  <a href="#"><img className='w-[50px]' src={TwitterIcon} alt="" /></a>
                </div>
              </div>
            </div>

            <main>
              <section>
                <div>
                  <div className='flex justify-between items-center font-bold'>
                    <h3 className='text-[65px]'>We have</h3>
                    <div className='flex gap-[25px] text-[34px]'>
                      <div>
                        <p>5+</p>
                        <p>Experience</p>
                      </div>
                      <div>
                        <p>2500+</p>
                        <p>Stents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    )
  }
}
