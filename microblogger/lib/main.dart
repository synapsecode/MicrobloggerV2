import 'package:flutter/material.dart';

void main() {
  runApp(const MicrobloggerApp());
}

class MicrobloggerApp extends StatelessWidget {
  const MicrobloggerApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MicrobloggerRoot(),
    );
  }
}

class MicrobloggerRoot extends StatelessWidget {
  const MicrobloggerRoot({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(),
    );
  }
}
