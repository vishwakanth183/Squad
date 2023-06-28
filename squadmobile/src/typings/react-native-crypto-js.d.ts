declare module 'react-native-crypto-js' {
    import { AES, EncUTF8 , Enc} from 'crypto-js';

    const AESModule: AES;
    const EncUTF8Module: EncUTF8;
    const EncModule: Enc;

  export { AESModule as AES, EncUTF8Module as EncUTF8, EncModule as Enc };
}
