function validasiToken(token: string): boolean {
    return /^\d{21}$/.test(token);
}

const token = "847291635018472936501";

if (validasiToken(token)) {
    console.log("Token PROsfery valid");
} else {
    console.log("Token tidak valid");
}
