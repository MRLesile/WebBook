# SDK 接入篇
## 百度文本翻译接入Demo
>示例如下：
``` csharp
public static string ChangeLanague(string args)
    {
        // 原文
        string q = args;
        // 源语言
        string from = "en";
        // 目标语言
        string to = "zh";
        // 改成您的APP ID
        string appId = "xxxx";

        Random rd = new Random();
        string salt = rd.Next(100000).ToString();

        // 改成您的密钥
        string secretKey = "xxxxxxx";
        string sign = EncryptString(appId + q + salt + secretKey);
        string url = "http://api.fanyi.baidu.com/api/trans/vip/translate?";
        url += "q=" + HttpUtility.UrlEncode(q);
        url += "&from=" + from;
        url += "&to=" + to;
        url += "&appid=" + appId;
        url += "&salt=" + salt;
        url += "&sign=" + sign;
        HttpWebRequest request = (HttpWebRequest) WebRequest.Create(url);
        request.Method = "GET";
        request.ContentType = "text/html;charset=UTF-8";
        request.UserAgent = null;
        request.Timeout = 12000;
        HttpWebResponse response = (HttpWebResponse) request.GetResponse();
        Stream myResponseStream = response.GetResponseStream();
        StreamReader myStreamReader = new StreamReader(myResponseStream, Encoding.GetEncoding("utf-8"));
        string retString = myStreamReader.ReadToEnd();
        myStreamReader.Close();
        myResponseStream.Close();
        Console.WriteLine(retString);
        Console.ReadLine();

        return retString;
    }

    // 计算MD5值
    public static string EncryptString(string str)
    {
        MD5 md5 = MD5.Create();
        // 将字符串转换成字节数组
        byte[] byteOld = Encoding.UTF8.GetBytes(str);
        // 调用加密方法
        byte[] byteNew = md5.ComputeHash(byteOld);
        // 将加密结果转换为字符串
        StringBuilder sb = new StringBuilder();
        foreach (byte b in byteNew)
        {
            // 将字节转换成16进制表示的字符串，
            sb.Append(b.ToString("x2"));
        }

        // 返回加密的字符串
        return sb.ToString();
    } 
```

## 有道翻译接入Demo

  ``` csharp
      public static void youdaoyun()
    {
        Dictionary<String, String> dic = new Dictionary<String, String>();
        string url = "https://openapi.youdao.com/api";
        string q = "Basilic Vein";
        string appKey = "xxxx";
        string appSecret = "xxxxxx";
        string salt = DateTime.Now.Millisecond.ToString();
        dic.Add("from", "en");
        dic.Add("to", "zh-CHS");
        dic.Add("signType", "v3");
        TimeSpan ts = (DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc));
        long millis = (long) ts.TotalMilliseconds;
        string curtime = Convert.ToString(millis / 1000);
        dic.Add("curtime", curtime);
        string signStr = appKey + Truncate(q) + salt + curtime + appSecret;
        ;
        string sign = ComputeHash(signStr, new SHA256CryptoServiceProvider());
        dic.Add("q", HttpUtility.UrlEncode(q));
        dic.Add("appKey", appKey);
        dic.Add("salt", salt);
        dic.Add("sign", sign);
        // dic.Add("vocabId", "您的用户词表ID");
        Post(url, dic);
    }

    protected static string ComputeHash(string input, HashAlgorithm algorithm)
    {
        Byte[] inputBytes = Encoding.UTF8.GetBytes(input);
        Byte[] hashedBytes = algorithm.ComputeHash(inputBytes);
        return BitConverter.ToString(hashedBytes).Replace("-", "");
    }

    protected static void Post(string url, Dictionary<String, String> dic)
    {
        string result = "";
        HttpWebRequest req = (HttpWebRequest) WebRequest.Create(url);
        req.Method = "POST";
        req.ContentType = "application/x-www-form-urlencoded";
        StringBuilder builder = new StringBuilder();
        int i = 0;
        foreach (var item in dic)
        {
            if (i > 0)
                builder.Append("&");
            builder.AppendFormat("{0}={1}", item.Key, item.Value);
            i++;
        }

        byte[] data = Encoding.UTF8.GetBytes(builder.ToString());
        req.ContentLength = data.Length;
        using (Stream reqStream = req.GetRequestStream())
        {
            reqStream.Write(data, 0, data.Length);
            reqStream.Close();
        }

        HttpWebResponse resp = (HttpWebResponse) req.GetResponse();

        if (resp.ContentType.ToLower().Equals("audio/mp3"))
        {
            SaveBinaryFile(resp, "合成的音频存储路径");
            
        }
        else
        {
            Stream stream = resp.GetResponseStream();
            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
            {
                result = reader.ReadToEnd();
            }
            Debug.Log(result);
            Console.WriteLine(result);
        }
    }

    protected static string Truncate(string q)
    {
        if (q == null)
        {
            return null;
        }

        int len = q.Length;
        return len <= 20 ? q : (q.Substring(0, 10) + len + q.Substring(len - 10, 10));
    }

    private static bool SaveBinaryFile(WebResponse response, string FileName)
    {
        string FilePath = FileName + DateTime.Now.Millisecond.ToString() + ".mp3";
        bool Value = true;
        byte[] buffer = new byte[1024];

        try
        {
            if (File.Exists(FilePath))
                File.Delete(FilePath);
            Stream outStream = System.IO.File.Create(FilePath);
            Stream inStream = response.GetResponseStream();

            int l;
            do
            {
                l = inStream.Read(buffer, 0, buffer.Length);
                if (l > 0)
                    outStream.Write(buffer, 0, l);
            } while (l > 0);

            outStream.Close();
            inStream.Close();
        }
        catch
        {
            Value = false;
        }

        return Value;
    }

    ```

