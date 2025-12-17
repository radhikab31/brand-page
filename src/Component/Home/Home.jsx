export default function Home() {
  return (
    <div className="flex items-center gap-2 p-5 w-full h-[80vh] ">
      <div id="left-cont" className="flex-1 h-full ">
        <h1 className="text-8xl">YOUR FEET DESERVE THE BEST</h1>
        <p> YOUR FEET DESERVE THE BEST AND HERE WE'RE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND HERE WE'RE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND HERE WE'RE TO HELP YOU WITH OUR SHOES. </p>
        <button className="bg-amber-700 py-2 px-4 cursor-pointer text-white rounded-sm mr-2 mt-2">Shop Now</button>
        <button className="bg-amber-400 py-2 px-4 cursor-pointer text-white rounded-sm">Category</button>
        <div id="other-shopping-areas">
          <p>Also Available on</p>
          <div className="flex gap-2 mt-2">
            <img src="./amazonLogo.png" alt="Amazon Logo" className="size-12" />
            <img src="./flipkartLogo.png" alt="Flipkart Logo" className="size-12" />
          </div>
        </div>
      </div>
      <div id="right-cont" className="flex-1 h-full flex justify-center">
        <img src="./shoeImage.jpg" alt="Shoe Image" className="size-120 self-center" />
      </div>
    </div>
  );
}
