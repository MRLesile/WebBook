# 模型相关处理
### 获取选中模型所有子物体的Name

``` csharp
   [MenuItem("Tools/GetMeshNames")]
    public static void GetSelcetModelMeshNames()
    {
        if (Selection.activeGameObject == null)
        {
            Debug.LogError("Not Select Any GameObject");
            return;
        }

        var SelcetObject = Selection.activeGameObject;
        List<ExportedObject> exportedObjects = new List<ExportedObject>();
        GetChildObjects(SelcetObject.transform, exportedObjects, "");

        var RelustJson = ClearUpTreeViewData(exportedObjects);

        string jsonData = JsonMapper.ToJson(RelustJson);

        File.WriteAllText(Application.dataPath + outputFilePath, jsonData);

        AssetDatabase.Refresh();
    }
    private static void GetChildObjects(Transform parent, List<ExportedObject> exportedObjects, string parentPath)
    {
        foreach (Transform child in parent)
        {
            // Create exported object
            ExportedObject exportedObject = new ExportedObject
            {
                Name = child.name,
                Path = $"{parentPath}/{child.name}"
            };
            var Spllit = exportedObject.Path.Split("/");
            exportedObject.ParentName = Spllit[1];

            exportedObject.RankIndex = Spllit.Length;
            // Add to list
            exportedObjects.Add(exportedObject);

            // Recursively get child objects
            GetChildObjects(child, exportedObjects, exportedObject.Path);
        }
    }
    private static List<NameExportItem> ClearUpTreeViewData(List<ExportedObject> exportedObjects)
    {
        List<NameExportItem> NameExportItem = new List<NameExportItem>();

        foreach (var Value in exportedObjects)
        {
            NameExportItem Mei = new NameExportItem();
            Mei.Name = Value.Name;

            if (Value.RankIndex == 2)
            {
                var Reslut = NameExportItem.Find(p => p.Name == Value.Name);


                if (Reslut == null)
                {
                    Mei.NeedChar.Add(Mei.Name);
                    NameExportItem.Add(Mei);
                }
            }
            else if (Value.RankIndex == 3)
            {
                var Reslut = NameExportItem.Find(p => p.Name == Value.ParentName);

                if (Reslut != null)
                {
                    var SplitChar = Mei.Name.Split("_");
                    var FindIndex = FindIntStringIndex(SplitChar);
                    Mei.NeedChar = GetSpilitStrings(FindIndex, SplitChar.ToList());

                    for (int i = 0; i < Mei.NeedChar.Count; i++)
                    {
                        string zhstring = ChangeLanague(Mei.NeedChar[i]);

                        JsonData json = JsonMapper.ToObject<JsonData>(zhstring);

                        string dst = json["trans_result"][0]["dst"].ToString();

                        Mei.ChinaeseChar.Add(dst);
                    }

                    Reslut.NextItem.Add(Mei);
                }
            }
        }

        return NameExportItem;
    }
[System.Serializable]
public class ExportedObject
{
    /// <summary>
    /// Name
    /// </summary>
    public string Name;

    /// <summary>
    /// 路径
    /// </summary>
    public string Path;

    /// <summary>
    /// 层级
    /// </summary>
    public int RankIndex;

    /// <summary>
    /// 父级名称
    /// </summary>
    public string ParentName;
}

```