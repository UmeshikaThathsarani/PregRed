# import json

# # import boto3

# # import pandas as pd
# # import tensorflow as tf
# # from tensorflow import keras
# # from sklearn.model_selection import train_test_split
# # import numpy as np

# # import warnings
# # import pickle

# # s3_client = boto3.client('s3')

# # s3_clientobj = s3_client.get_object(Bucket='pregreddataset', Key='Weka_PregRed_Selected13_Dataset.csv')


# def handler(event, context):
#     print('received event:')
#     print(event)

#     body = json.loads(event['body'])

#     # df = pd.read_csv('https://pregreddataset.s3-ap-southeast-1.amazonaws.com/Weka_PregRed_Selected13_Dataset.csv')

#     # properties = list(df.columns.values)
#     # properties.remove('Prediction')
#     # X = df[properties]
#     # y = df['Prediction']

#     # X_train, X_test, y_train, y_test = train_test_split(
#     #     X, y, test_size=0.3, random_state=0)

#     # model = keras.Sequential([
#     #     keras.layers.Flatten(input_shape=(13,)),
#     #     keras.layers.Dense(16, activation=tf.nn.relu),
#     #     keras.layers.Dense(16, activation=tf.nn.relu),
#     #     keras.layers.Dense(1, activation=tf.nn.sigmoid),
#     # ])

#     # model.compile(optimizer='adam',
#     #               loss='binary_crossentropy',
#     #               metrics=['accuracy'])

#     # model.fit(X_train, y_train, epochs=39, batch_size=1)

#     # test_loss, test_acc = model.evaluate(X_test, y_test)
#     # print('Test accuracy:', test_acc)

#     # a = np.array([json.dumps(body['age']), json.dumps(body['gravidity']), json.dumps(body['bldPre']), json.dumps(body['height']), json.dumps(body['bmi']), json.dumps(body['bldSug']), json.dumps(body['hemog']), json.dumps(body['consngity']), json.dumps(body['rubella']), json.dumps(body['folic']), json.dumps(body['subfer']), json.dumps(body['cardic']), json.dumps(body['tyroid'])])
#     # # a = np.array([0.89899, 0.648649, 0, 0.414141, 0.5, 0.439344, 0, 0.333333, 0,0, 0, 0, 0])
#     # print(model.predict(a))

#     # pickle.dump(model, open('model.pkl', 'wb'))
#     # model = pickle.load(open('model.pkl', 'rb'))

#     return {
#         'statusCode': 200,
#         'headers': {
#             'Content-Type': 'application/json',
#             'Access-Control-Allow-Headers': '*',
#             'Access-Control-Allow-Origin': '*',
#             'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
#         },
#         # 'body': json.dumps('Received.')
#         'body': json.dumps(body['age'])
#         # 'body':json.dumps(model.predict(a))
#     }

