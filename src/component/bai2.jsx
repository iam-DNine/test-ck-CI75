export const TeamWt = () => {
    const weight = [60, 40, 55, 75, 64];
    const tongCanNang = [0, 0]
    for (let i = 0; i < weight.length; i++) {
        if (i % 2 == 0) {
            tongCanNang[0] += weight[i];
        } else {
            tongCanNang[1] += weight[i];
        }
    }
    console.log("cân nặng của mọi người là: " + weight);
    console.log("cân nặng của team 1 và 2 lần lượt là: " + tongCanNang);
}