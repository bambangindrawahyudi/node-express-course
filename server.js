const  express  =  membutuhkan ( ' express ' );
app const  = express ();  
const  mockUserData = [
{name : ' Mark ' },
{name : ' Jill ' }
]
aplikasi . get ( ' / users ' , function ( req , res ) {
 	 res . json ({
 	 	sukses :  benar ,
 	 	pesan :  ' berhasil mendapatkan pengguna. Bagus! ' ,
 	 	pengguna : mockUserData
 	})
})
