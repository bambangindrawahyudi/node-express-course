const express = require('express');
const app = express();

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})
// colons are used as variables that be viewed in the params
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})
// titik dua digunakan sebagai variabel yang dilihat di 
aplikasi params . get ( ' / users /: id ' , function ( req , res ) {
	 console . log ( req . params . id )
	 res . json ({
		sukses :  benar ,
		pesan :  ' dapatkan satu pengguna ' ,
		pengguna :  req . params . Indo
	})
})

aplikasi . post ( ' / login ' , function ( req , res ) {
	 // Biasanya kata sandi dienkripsi menggunakan sesuatu seperti bcrypt sebelum mengirim ke database 
	const  username = req . body . username ;
	 const  password = req . body . password ;

	// Ini harus berasal dari database 
	const  mockUsername = " billyTheKid " ;
	const  mockPassword = " superSecret " ;

	if (username === mockUsername && password === mockPassword) {
		 // Dalam praktiknya, gunakan metode tanda token web JSON di sini untuk membuat 
		res token terenkripsi . json ({
			sukses :  benar ,
			message :  ' kata sandi dan nama pengguna cocok! ' ,
			token :  ' token terenkripsi ada di sini '
		})
	} else {
		 res . json ({
			sukses :  salah ,
			pesan :  ' kata sandi dan nama pengguna tidak cocok '
		})
	}

})

app.listen(8000,function(){console.log('server is listening')})

