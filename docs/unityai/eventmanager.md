# EventManger参考模版

```

using System;
using System.Collections.Generic;
using UnityEngine;

public class EventManager
{
    private static EventManager instance;
    public static EventManager Instance => instance ?? (instance = new EventManager());

    private Dictionary<Type, Delegate> eventTable = new Dictionary<Type, Delegate>();

    private EventManager()
    {
    }

    public void AddListener<T>(Action<T> listener) where T : IEvent
    {
        Type eventType = typeof(T);

        if (!eventTable.ContainsKey(eventType))
        {
            eventTable[eventType] = null;
        }

        eventTable[eventType] = (Action<T>) eventTable[eventType] + listener;
    }

    public void RemoveListener<T>(Action<T> listener) where T : IEvent
    {
        Type eventType = typeof(T);

        if (eventTable.ContainsKey(eventType))
        {
            eventTable[eventType] = (Action<T>) eventTable[eventType] - listener;

            if (eventTable[eventType] == null)
            {
                eventTable.Remove(eventType);
            }
        }
    }

    public void TriggerEvent<T>(T eventData) where T : IEvent
    {
        Type eventType = typeof(T);

        if (eventTable.ContainsKey(eventType))
        {
            Action<T> callback = eventTable[eventType] as Action<T>;

            if (callback != null)
            {
                callback(eventData);
            }
        }
    }

    //演示
    public void Test()
    {
        //事件订阅
        EventManager.Instance.AddListener<InputEvent>(HandleEvent);
        
        //事件移除
        EventManager.Instance.RemoveListener<InputEvent>(HandleEvent);


        //事件执行
        InputEvent ie = new InputEvent( /*自定义参数*/);
        EventManager.Instance.TriggerEvent(ie);
    }

    public void HandleEvent(InputEvent eEvent)
    {
        //Do Something
    }
}

public interface IEvent
{
}

// 定义事件类
public class InputEvent : IEvent
{
    //Enter对象
    public GameObject OnPointerObj;

}



```





