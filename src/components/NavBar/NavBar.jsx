const NavBar = () => {
  return (
    <div className="py-5 w-full bg-transparent flex items-center place-content-evenly absolute text-white">
      <div>
        <SvgComponent />
      </div>
      <div className="flex gap-20 text-lg font-thin content-center">
        <p className="underline underline-offset-8">About</p>
        <p className="underline underline-offset-8">Portofolio</p>
      </div>
      <div className="opacity-0">
        <SvgComponent />
      </div>
    </div>
  );
};

function SvgComponent(props) {
  return (
    <svg
      width={151}
      height={58}
      viewBox="0 0 151 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M71.59 10.663c2.9 0 4.35 1.45 4.35 4.35h-3.263c0-.724-.363-1.087-1.088-1.087h-6.526c-.725 0-1.088.363-1.088 1.088v.544c0 .724.363 1.087 1.088 1.087h6.526c2.9 0 4.351 1.451 4.351 4.351v.544c0 2.902-1.45 4.351-4.35 4.351h-6.527c-2.902 0-4.351-1.45-4.351-4.35h3.263c0 .724.363 1.087 1.088 1.087h6.526c.725 0 1.088-.363 1.088-1.088v-.544c0-.724-.363-1.087-1.088-1.087h-6.526c-2.902 0-4.351-1.451-4.351-4.351v-.544c0-2.9 1.45-4.351 4.35-4.351h6.527zM81.38 19.91v5.982h-3.264v-15.23h3.263v5.983h8.702v-5.982h3.263v15.23h-3.263V19.91H81.38zM95.521 20.454v-9.792h3.263v9.792c0 1.45.725 2.175 2.176 2.175h4.351c1.45 0 2.175-.725 2.175-2.175v-9.792h3.263v9.792c0 3.626-1.813 5.438-5.438 5.438h-4.351c-3.626 0-5.439-1.812-5.439-5.438zM123.805 10.662c2.9 0 4.351 1.451 4.351 4.351v.544c0 1.125-.218 2.03-.653 2.72.435.69.653 1.595.653 2.72v.543c0 2.902-1.451 4.35-4.351 4.35h-10.879V10.662h10.879v.002zm1.088 4.351c0-.724-.363-1.087-1.088-1.087h-7.614v2.72h7.614c.725 0 1.088-.364 1.088-1.089v-.543zm-1.088 7.615c.725 0 1.088-.363 1.088-1.088v-.544c0-.725-.363-1.088-1.088-1.088h-7.614v2.72h7.614zM133.595 19.91v5.982h-3.263v-15.23h3.263v5.983h8.702v-5.982h3.263v15.23h-3.263V19.91h-8.702zM75.94 36.172v4.351c0 3.626-1.813 5.439-5.438 5.439H60.71v-15.23h9.79c3.627 0 5.44 1.814 5.44 5.439v.001zm-3.263 4.351v-4.35c0-1.452-.725-2.176-2.175-2.176h-6.527v8.702h6.527c1.45 0 2.175-.725 2.175-2.176zM93.346 30.733v3.264H81.379v2.719h10.879v3.263H81.379v2.72h11.967v3.263h-15.23v-15.23h15.23v.001zM106.4 30.733c2.9 0 4.351 1.451 4.351 4.351h-3.263c0-.724-.363-1.087-1.088-1.087h-6.527c-.724 0-1.087.363-1.087 1.087v.544c0 .725.363 1.088 1.087 1.088h6.527c2.9 0 4.351 1.45 4.351 4.35v.545c0 2.901-1.451 4.35-4.351 4.35h-6.527c-2.901 0-4.35-1.45-4.35-4.35h3.263c0 .725.363 1.088 1.087 1.088h6.527c.725 0 1.088-.363 1.088-1.088v-.544c0-.725-.363-1.088-1.088-1.088h-6.527c-2.901 0-4.35-1.45-4.35-4.35v-.545c0-2.9 1.45-4.35 4.35-4.35h6.527zM116.19 45.963h-3.263v-15.23h3.263v15.23zM123.805 30.733h9.791v3.264h-9.791c-1.45 0-2.175.724-2.175 2.175v4.351c0 1.45.725 2.175 2.175 2.175h6.527V39.98h-5.439v-3.263h8.702v9.247h-9.791c-3.626 0-5.439-1.812-5.439-5.439v-4.35c0-3.627 1.813-5.44 5.439-5.44h.001zM147.737 40.393v-9.66H151v15.23h-2.306l-9.66-9.66v9.66h-3.263v-15.23h2.306l9.66 9.66zM24.956 0L.008 14.472l1.776 1.03 23.175-13.45 21.392 12.42 1.798-1.043L24.956 0zm19.64 15.49L24.956 4.125 3.566 16.532v6.206l16.049 9.309 1.783-1.034-16.048-9.31v-4.137L24.966 6.19l17.832 10.342 1.798-1.043zM24.96 8.261L7.133 18.6v2.069L23.19 29.98l1.776-1.038-16.05-9.309 16.04-9.303 14.276 8.268 1.784-1.034L24.959 8.26v.002zM.008 43.432l24.959 14.473-.008-28.964-1.776 1.038V54.8L1.783 42.39V29.977l-1.775-1.03v14.486zm3.56-2.077L21.4 51.698l-.01-20.68-1.773 1.029v16.548L5.36 40.316l-.092-8.272-1.79-1.03.092 10.341h-.002zm3.57-2.07l10.696 6.208V33.08l-1.784 1.034v8.274l-7.133-4.137v-4.137L7.133 33.08l.004 6.204zM.007 14.472L0 24.894l16.049 9.222 1.784-1.034-16.05-9.222v-8.358l-1.775-1.03zM26.782 27.91l-.033 2.068 23.182-13.446-.014-2.06-23.135 13.437v.001zm-.033 6.206l19.609-11.382.008-2.064-19.617 11.376v2.07zm-.008 4.14l16.057-9.312v-2.068l-16.057 9.313v2.068zm23.176 5.176l.014-26.9-1.783 1.034v24.823L26.74 54.804v2.06l23.176-13.433zm-3.56-2.081V22.733l-1.771 1.04v16.544L26.749 50.663v2.068l19.609-11.382v.001zM26.75 46.525l-.008 2.074 16.057-9.313V28.943l-1.784 1.034.008 8.279-14.273 8.27z"
        fill="#fff"
      />
    </svg>
  );
}

export default NavBar;