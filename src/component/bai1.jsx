export const Bai1 = () => {
    const Arr = [2, 3, -5, -2, 4, 1000];
    let tongHaiSo = Arr[0] * Arr[1];
    let x = 0;
    for (let i = 0; i < Arr.length - 1 ; i++) {
        let soLonNhat = Arr[i] * Arr[i+1];
        if (tongHaiSo > soLonNhat) {
            x = tongHaiSo;
        } else {
            x = soLonNhat;
            tongHaiSo = soLonNhat;
        }
    }
    console.log("Tích to nhất bằng: " + x);
}