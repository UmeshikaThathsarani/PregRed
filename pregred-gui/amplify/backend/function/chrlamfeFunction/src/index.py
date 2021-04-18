import json

# import pandas as pd
# import tensorflow as tf
# from tensorflow import keras
# from sklearn.model_selection import train_test_split
# import numpy as np

# import warnings;
# import pickle;

# def handler(event, context):
#   print('received event:')
#   print(event)
  
#   return {
#       'statusCode': 200,
#       'headers': {
#           'Access-Control-Allow-Headers': '*',
#           'Access-Control-Allow-Origin': '*',
#           'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
#       },
#       'body': json.dumps('Hello from your new Amplify Python lambda!')
#   }

def lambda_handler (event, context):
    firstNum = 10
    secNum = 20
    re = firstNum + secNum

    return{
        'statusCode': 200,
        'body':json.dumps(re)
    }
    # transactionID = event['queryStringParameters']['transactionID']

    # transactionResponse['transactionID'] = transactionID
    # transactionResponse['message'] = "Hello from Chiran"

    # responseObject = {}
    # responseObject['statusCode'] = 200
    # responseObject['headers'] {}
    # responseObject['headers']['Content-Type'] = 'application/json'
    # responseObject['body'] = json.dumps(transactionResponse)

    # return responseObject



# df = pd.read_csv(r'E:\3 rd year semester 1--10-10-2020\SDGP ---11-11-2020\Implementation----07-03-2021\Weka_PregRed_binary_Dataset.csv')

# properties = list(df.columns.values)
# properties.remove('Prediction')
# X = df[properties]
# y = df['Prediction']

# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)

# model = keras.Sequential([
#     keras.layers.Flatten(input_shape=(13,)),
#     keras.layers.Dense(16, activation=tf.nn.relu),
# 	keras.layers.Dense(16, activation=tf.nn.relu),
#     keras.layers.Dense(1, activation=tf.nn.sigmoid),
# ])

# model.compile(optimizer='adam',
#               loss='binary_crossentropy',
#               metrics=['accuracy'])

# model.fit(X_train, y_train, epochs=39, batch_size=1)



# test_loss, test_acc = model.evaluate(X_test, y_test)
# print('Test accuracy:', test_acc)

# a= np.array([[0.89899, 0.648649, 0, 0.414141, 0.5, 0.439344, 0, 0.333333, 0,0, 0, 0, 0],
#              [0.444444, 0.378378, 0, 0.494949,0.3125, 0.272131, 0, 0.166667, 0, 1, 1, 0, 0]])
# print(model.predict(a))

# pickle.dump(model,open('model.pkl','wb'))
# model= pickle.load(open('model.pkl','rb'))