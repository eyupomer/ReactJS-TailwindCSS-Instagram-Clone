import Input from "components/Input";
import { useEffect, useRef, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";

function App() {
  const ref = useRef();

  const [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const enabled = username && password.length > 5;

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex flex-wrap overflow-auto gap-x-8 items-center justify-center">

      <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            alt="Landing img"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            alt="Landing img"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            alt="Landing img"
          />
        </div>
      </div>

      <div className="w-[350px] grid gap-y-3">

        <div className="bg-white border px-[40px] pt-12">
          <a className="mb-8 flex justify-center" href="/">
            <img
              className="h-[50px]"
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
              alt="Instagram logo"
            />
          </a>
          <form className="grid gap-y-2">
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              label="Telefon numarası, kullanıcı adı veya e-posta"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Şifre"
            />
            <button
              className="mt-1 h-[30px] bg-[#0096f6] text-white text-sm rounded-sm disabled:opacity-50 font-semibold"
              disabled={!enabled}
              type="submit"
            >
              Giriş yap
            </button>
            <div className="flex items-center mt-2.5 mb-3.5">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4 text-[13px] text-gray-500 font-semibold">
                YA DA
              </span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <div>
              <a className="flex justify-center items-center gap-x-2 text-sm font-semibold text-[#385185]" href="/">
                <AiFillFacebook size={20} />
                Facebook ile Giriş Yap
              </a>
              <a className="mt-4 text-xs flex items-center justify-center text-link text-[#00376b]" href="/">Şifremi mi unuttun?</a>
            </div>
          </form>
        </div>

        <div className="bg-white border p-4 text-sm text-center">
          Hesabın yok mu? <a className="text-[#0095f6] font-semibold" href="/">Kaydol</a>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-3">
          <p className="text-sm text-center">Uygulamayı indir.</p>
          <div className="flex items-center justify-center gap-x-2">
            <img className="w-[134px] h-10" src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png" alt="App Logo" />
            
            <img className="w-[134px] h-10" src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png" alt="App Logo" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
