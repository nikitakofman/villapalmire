function BookButton() {
  return (
    <div class=" pl-10 h-[30px] z-20 absolute">
      <button class=" h-[30px] relative shadow-2xl bg-gray-800 outline px-2 outline-offset-2 outline-1 outline-gray-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99]">
        <a
          class="font-light text-[14px] text-white"
          href="https://www.booking.com/hotel/fr/villa-palmire.fr.html"
          target="_blank"
        >
          Book
        </a>
      </button>
    </div>
  );
}

export default BookButton;
